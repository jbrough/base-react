import moment from 'moment';

export default function(date, time, flex) {
  const dateTime = moment(`${date} ${time}`);
  const mins = Math.abs(parseInt(flex));

  let a;
  let b;

  if (flex[0] === '+') {
    b = moment(dateTime.format()).add(mins, "minutes");
    a = dateTime;
  } else if (flex[0] === "-") {
    a = moment(dateTime.format()).subtract(mins, "minutes");
    b = dateTime;
  } else {
    a = moment(dateTime.format()).subtract(mins, "minutes");
    b = moment(dateTime.format()).add(mins, "minutes");
  }

  return {
    params: { start: a.format(), end: b.format() },
    text: `${a.format('h:mm A')} - ${b.format('h:mm A')}`,
  };
}
