let defaultCity = '未知'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}
export default {
  city: defaultCity
}
