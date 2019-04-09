var fortuneCookies = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  'Do not fear waht you don\'t know',
  'You will have a pleasan surprise.', 
  'Whenever possible, keep it simple'
]

exports.getFortune = () => {
  var idx = Math.floor(Math.random() * fortuneCookies.length)
  return fortuneCookies[idx]
}