(head,req) ->
  start {'headers':{'Content-Type' : 'text/csv; charset=utf-8; header=present'}}
  while r = getRow()
    if  !headers
      headers = Object.keys(r.value);
      send('"' + headers.join('","') + '"\n');

    headers.forEach (v,i) ->
      send  String(r.value[v]).replace(/\"/g,'""').replace(/^|$/g,'"')
      if (i + 1 < headers.length) then send(',') else send('\n');

