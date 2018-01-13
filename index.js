/**
 * Created by vigro on 2018/1/13.
 */

function parse(chunks) {
  var bufferconcat = Buffer.concat(chunks);
  var newArray = [];
  for (var a = 0; a < bufferconcat.length; a++) {
    if (bufferconcat[a].toString() == 13 && bufferconcat[a + 1].toString() == 10) {
      newArray.push(a);
    }
  }
  var data = bufferconcat.slice(newArray[3] + 2, newArray[newArray.length - 2]);
  if (!data.length) {
    return {
      file:'',
      filename:undefined
    };
  }
  var name = bufferconcat.slice(newArray[0], newArray[1]).toString().split(';')[2].split('=')[1];
  var filename = name.split('"').filter(function(target) {
    return target != '';
  }).toString();
  return {
    file:data,
    filename:filename
  }
}