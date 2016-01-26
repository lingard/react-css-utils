import R from 'ramda';

export default function createClassName(...args) {
  return R.compose(
    R.join(' '),
    R.uniq,
    R.filter(R.identity),
    R.flatten
  )(args);
}