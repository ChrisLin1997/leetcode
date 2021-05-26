/*
 * @lc app=leetcode id=332 lang=javascript
 *
 * [332] Reconstruct Itinerary
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const mapArroval = new Map()
  for (const ticket of tickets) {
      if (!mapArroval[ticket[0]]) mapArroval[ticket[0]] = []
      mapArroval[ticket[0]].push(ticket[1])
  }
  for (const from in mapArroval) {
      mapArroval[from].sort()
  }

  const path = ['JFK']
  backTracking()
  return path
  
  function backTracking () {
      if (path.length === tickets.length + 1) return true
      if (!mapArroval[path[path.length - 1]]) return false

      for (let i = 0; i < mapArroval[path[path.length - 1]].length; ++i) {
          let curr = mapArroval[path[path.length - 1]].splice(i, 1)[0]
          path.push(curr)
          if (backTracking()) return true
          path.pop()
          mapArroval[path[path.length - 1]].splice(i, 0, curr)
      }
  }
};
// @lc code=end

