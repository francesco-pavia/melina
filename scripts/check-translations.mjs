import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

const filePath = path.resolve('src/data/translations.ts')
const source = ts.createSourceFile(filePath, fs.readFileSync(filePath, 'utf8'), ts.ScriptTarget.Latest, true)
let root

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'translations') {
    root = node.initializer
  }
  ts.forEachChild(node, visit)
}
visit(source)

if (!root || !ts.isObjectLiteralExpression(root)) {
  console.error('Could not find the translations object.')
  process.exit(1)
}

function properties(object) {
  return new Map(object.properties
    .filter(ts.isPropertyAssignment)
    .map((property) => [property.name.getText(source).replace(/^['"]|['"]$/g, ''), property.initializer]))
}

const locales = properties(root)
const reference = locales.get('it')
const failures = []

function compare(referenceNode, localeNode, locale, currentPath) {
  if (ts.isObjectLiteralExpression(referenceNode)) {
    if (!ts.isObjectLiteralExpression(localeNode)) {
      failures.push(`${locale}: ${currentPath} should be an object`)
      return
    }
    const referenceProperties = properties(referenceNode)
    const localeProperties = properties(localeNode)
    for (const [key, value] of referenceProperties) {
      const childPath = currentPath ? `${currentPath}.${key}` : key
      if (!localeProperties.has(key)) failures.push(`${locale}: missing ${childPath}`)
      else compare(value, localeProperties.get(key), locale, childPath)
    }
    for (const key of localeProperties.keys()) {
      if (!referenceProperties.has(key)) failures.push(`${locale}: unexpected ${currentPath}.${key}`)
    }
  } else if (ts.isArrayLiteralExpression(referenceNode)) {
    if (!ts.isArrayLiteralExpression(localeNode)) {
      failures.push(`${locale}: ${currentPath} should be an array`)
    } else if (referenceNode.elements.length !== localeNode.elements.length) {
      failures.push(`${locale}: ${currentPath} has ${localeNode.elements.length} entries; expected ${referenceNode.elements.length}`)
    }
  }
}

if (!reference || !ts.isObjectLiteralExpression(reference)) {
  console.error('Could not find the Italian reference translations.')
  process.exit(1)
}

for (const [locale, value] of locales) {
  if (locale !== 'it') compare(reference, value, locale, '')
}

if (failures.length) {
  console.error(`Translation structure check failed (${failures.length} issue(s)):\n${failures.join('\n')}`)
  process.exit(1)
}

console.log(`Translation structure check passed for: ${[...locales.keys()].join(', ')}`)
