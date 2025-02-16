import { stringToCamelCase } from './string-to-camel-case';

describe('stringToCamelCase', () => {
  it('should successfully convert a string to its camel case format', () => {
    expect(stringToCamelCase('the-stealth-warrior')).toEqual('theStealthWarrior');
    expect(stringToCamelCase('The_Stealth_Warrior')).toEqual('theStealthWarrior');
    expect(stringToCamelCase('The_Stealth-Warrior')).toEqual('theStealthWarrior');
  });
});
