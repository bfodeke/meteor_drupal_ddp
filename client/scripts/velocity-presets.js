$.Velocity.RegisterUI("transition.animateOnLoad", {
  defaultDuration: 900,
  calls: [
    [ 'transition.slideUpIn', .20 ],
  ]
});

$.Velocity.RegisterUI("transition.animateIn", {
  defaultDuration: 3000,
  calls: [
    [ 'transition.slideDownIn', .5 ]
  ]
});

$.Velocity.RegisterUI("transition.animateOut", {
  defaultDuration: 900,
  calls: [
    [ 'transition.slideUpOut', .20],
  ]
});

$.Velocity.RegisterUI("transition.cardFlipX", {
  defaultDuration: 900,
  calls: [
    [ {
      'perspective': '800px',
      'rotateY':'180deg'
    }, .50 ],
  ]
});