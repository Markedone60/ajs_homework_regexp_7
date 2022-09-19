class Validator {
  
  validateUsername(nameString) {
    if (nameString.search(/^[\d\-_]/) !== -1) {
      throw new Error('name shall not end with numbers, underline or dash symbols');
    }
    if (nameString.search(/[\d\-_]$/) !== -1) {
      throw new Error('name shall not end with numbers, underline or dash symbols');
    }
    if (nameString.search(/\d{4}/) !== -1) {
      throw new Error('name shall not have 3 or more numbers in the row');
    }
    if (nameString.search(!/[a-z]/) !== -1) {
      throw new Error('name shall composed only out of latin letters, numbers, underline and dash symbols');
    }

    return nameString;
  }
}

const validator = new Validator;
console.log(validator.validateUsername('BigBoss')); 

