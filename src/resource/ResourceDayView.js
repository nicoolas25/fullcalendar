
fcViews.resourceDay = ResourceDayView;

function ResourceDayView(element, calendar) {
  var t = this;


  // exports
  t.incrementDate = incrementDate;
  t.render = render;


  // imports
  ResourceView.call(t, element, calendar, 'resourceDay');


  function incrementDate(date, delta) {
    var out = date.clone().stripTime().add('days', delta);
    out = t.skipHiddenDays(out, delta < 0 ? -1 : 1);
    return out;
  }


  function render(date) {

    t.start = t.intervalStart = date.clone().stripTime();
    t.end = t.intervalEnd = t.start.clone().add('days', 1);

    t.title = calendar.formatDate(t.start, t.opt('titleFormat'));

    var colCnt = window.resourceList.length;
    t.renderAgenda(colCnt);
  }
}
