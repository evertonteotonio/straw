var straw = require('../lib/straw.js');

var topo = new straw.topology({
  'ping-1':{
    'node': __dirname +'/../examples/nodes/ping',
    'interval': 100,
    'output':'ping-out'
  },
  'ping-2':{
    'node': __dirname +'/../examples/nodes/ping',
    'interval': 3333,
    'output':'ping-out'
  },
  'consume':{
    'node': __dirname +'/../examples/nodes/consume',
    'input': 'ping-out'
  },
  'stats':{
    'interval': 1000,
    'node': __dirname + '/../examples/nodes/stats'
  }
});

process.on( 'SIGINT', function() {
  topo.destroy(function(){
    console.log( 'Finished.' );
  });
});
