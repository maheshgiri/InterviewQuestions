# InterviewQuestions

how to combine duplicate object with same key in one
example let arr = [{ "eventId": "1", "name": "name_a", "isCancelled": "true"},
{ "eventId": "1", "name": "name_a", "date": "2018-11-17T00:00:00.000Z"},
{ "eventId": "2", "name": "name_b", "Status": "Postponed"},
{ "eventId": "3", "name": "name_c", "isCancelled": "true"},
{ "eventId": "3", "name": "name_c", "status": "Private"}]


**Solution 1:-**
let tempobj={}
for(let currentobj of arr){
 tempobj[currentobj["eventId"]]={...(tempobj[currentobj["eventId"]]||{}),...currentobj};
}

