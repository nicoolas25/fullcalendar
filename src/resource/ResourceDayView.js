
fcViews.resourceDay = ResourceDayView;

function ResourceDayView(element, calendar) {
  var t = this;

  // exports
  t.render = render;

  // imports
  ResourceView.call(t, element, calendar, 'resourceDay');
  var opt = t.opt;
  var renderAgenda = t.renderAgenda;
  var skipHiddenDays = t.skipHiddenDays;
  var formatDates = calendar.formatDates;

  function render(date, delta) {

    if (delta) {
      addDays(date, delta);
    }

    var start = cloneDate(date);
    var end = addDays(cloneDate(start), 1);

    var colCnt = window.resourceList.length;

    t.title = formatDate(date, opt('titleFormat'));

    t.start = t.visStart = start;
    t.end = t.visEnd = end;

    renderAgenda(colCnt);
  }

}
