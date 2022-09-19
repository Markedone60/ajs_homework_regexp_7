import Validator from '../validator'



test('if non latin used)', () => {
  const nameString = 'TheБосс';
  expect(() => {
    Validator.validateUsername(nameString);
  }).toThrow('Error');
})



test('testing whether method able to validate proper nickname (wrong case - special simbols besides "-" and "_")', () => {
  const str = 'The-Iron&man999kicks';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.1.>');
});

test('testing whether method able to validate proper nickname (wrong case - mare than 3 digits in a row)', () => {
  const str = 'The-Iron_man9999kicks';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.2.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname begins with digit)', () => {
  const str = '9The-Iron_mankicks';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.3.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname begins with "_")', () => {
  const str = '_The-Iron_man999kicks';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.3.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname begins with "-")', () => {
  const str = '-The-Iron_man999kicks';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.3.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname ends by digit)', () => {
  const str = 'The-Iron_man999kicks9';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.4.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname ends by "_")', () => {
  const str = 'The-Iron_man999kicks_';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.4.>');
});

test('testing whether method able to validate proper nickname (wrong case - nickname ends by "-")', () => {
  const str = 'The-Iron_man999kicks-';
  expect(() => {
    Validator.validateUsername(str);
  }).toThrow('Прочитайте пункт 8.1 пользовательского соглашения: <допустимые паттерны и символы в нике п.4.>');
});