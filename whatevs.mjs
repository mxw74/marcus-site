import _ from 'lodash'

const arr = [1,2,3,4,5]

console.log(_.map(arr, (no) => {
  return no * 2
}))

console.log('hello')