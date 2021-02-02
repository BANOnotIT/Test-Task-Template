/* 
  В качестве оригинала даётся объект, представляющий собой дерево заранее неизвестной глубины
  Листья дерева ― строки с {placeholder}'ами

  Результатом должен быть объект такой же формы, как и оригинал
  Листья дерева ― format-функции, заменяющие плейсхолдеры значениями из аргумента-объекта
  Сигнатура format-функции:
    (vars?: { [key: string]: string | number }) => string

  NOTE: можно использовать готовую реализацию format-функции
 */

const sourceStrings = {
  hello: 'Добрый вечор, {username}!',
  admin: {
    objectForm: {
      label: 'Пароль администратора',
      hint: 'Не менее {minLength} символов. Сейчас ― {length}',
    },
  },
};

const t = i18n(sourceStrings);

console.log('🚀 Starting tests...');

const testFormat = 'Добрый вечор, me!' === t.hello({ username: 'me' });
console.assert(testFormat, '  ❌ First level failed!');

const testDepth = 'Пароль администратора' === t.admin.objectForm.label();
console.assert(testDepth, '  ❌ Generic depth failed!');

const testDepthFmt =
  'Не менее 8 символов. Сейчас ― 6' ===
  t.admin.objectForm.hint({ minLength: 8, length: 6 });
console.assert(testDepthFmt, '  ❌ Variables failed');

if (testDepth && testDepthFmt && testFormat)
  console.log('🎉 Good! All tests passed.');

// === implementation ===

type Input = {
  /* TODO type input */
};
type Result<T> = {
  /* TODO type output */
};

function i18n<T extends Input>(strings: T): Result<T> {
  let templatedStrings = strings;
  // TODO implementation
  return templatedStrings;
}
