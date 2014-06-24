var straw = require('../../lib/straw.js')

/*
 * emits cumulative count of messages received.
 */

module.exports = straw.node({
  total: 0,
  initialize: function(opts, done){
    this.opts.key = opts && opts.key || 'count-me-key';
    done();
  },
  process: function(msg, done) {      
    this.total ++;
    this.output({key: this.opts.key, count: this.total});    
    done();
  }
});
