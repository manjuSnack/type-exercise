// #5.4 JSDoc

// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns
 */
export function exit(code) {
  return code + 1;
}

// @ts-check
// : TypeScript File로 불러들일 때 JavaScript File을 확인하라는 주석 키워드

// @param {*} parameter name
// : @param {*}에 *대신 type(object, boolean, string, ...)을 지정 후 parameter name을 적어준다.
// .d.ts에 type을 지정하지 않고도 JavaScript에서 type을 적어줄 수 있다.
// '/** */' 입력 후 Enter 시 자동완성된다.

// @returns
// : return의 반환할 type을 지정해 줄 수 있다. 예시, @returns {type}
