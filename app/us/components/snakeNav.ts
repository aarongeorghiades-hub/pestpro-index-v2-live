// The header nav for the snake cluster.
//
// WHY THIS FILE EXISTS AT ALL: UsPageLayout requires `homeHref` and `clusterNav`
// explicitly. There is no default behind either prop, so every cluster states its
// own here rather than inheriting another cluster's identity by omission.
//
// COLLECTED, S51 R5b: these values were declared inline in the page file until this
// round moved them here, which is where the other sixteen clusters keep theirs. The
// values are unchanged by the move.
//
// THE INLINE COMMENT THIS REPLACES CARRIED NO CLUSTER RULING. It recorded only
// why the constants were inline — that S50 R6's file scope was the page and the
// hub — which the move discharges. Nothing was dropped in carrying it across.

export const SNAKE_HOME = '/us';

export const SNAKE_NAV = [{ title: 'Snakes', href: '/us/snakes' }];
