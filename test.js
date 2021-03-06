import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
  return postcss([ plugin(opts) ]).process(input)
    .then( result => {
      t.same(result.css, output);
      t.same(result.warnings().length, 0);
    });
}


test('multiline-comment-remove', t => {
  return run(t, '/*! Remove Comment */', '', { });
});

test('multiline-comment-keep', t => {
  return run(t, '/* Keep Comment */', '/* Keep Comment */', { });
});
