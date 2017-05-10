'use strict';
app.run(socketWatch);

socketWatch.$inject =['$rootScope', '$timeout', 'api'];
function socketWatch ($rootScope, $timeout, api) {
  let socketData = io.connect(api);
  socketData.on('news', (data) => {
    $rootScope.$emit('newItem', data);
      $timeout(() => {
          $rootScope.$emit('hideItem', data);
        }, 2000);
  });
}
