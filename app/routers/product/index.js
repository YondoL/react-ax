/**
 * Created by chaiqing on 2017/7/26.
 */
module.exports = {
  path: 'product/',
  childRoutes: [
    {
      path: 'home',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Home.jsx'))
        })
      }
    },{
      path: 'child1',
      getComponent (nextState,cb) {
        require.ensure([], (require) => {
          cb(null,require('./children1/Children1.jsx'))
        })
      }
    },{
      path: 'child2',
        getComponent (nextState,cb) {
          require.ensure([], (require) => {
            cb(null,require('./children2/Children2.jsx'))
          })
        }
    },{
      path: 'child3',
        getComponent (nextState,cb) {
          require.ensure([], (require) => {
            cb(null,require('./children3/Children3.jsx'))
          })
        }
    },{
      path: 'child4',
        getComponent (nextState,cb) {
          require.ensure([], (require) => {
            cb(null,require('./children4/Children4.jsx'))
          })
        }
    }
  ]
}