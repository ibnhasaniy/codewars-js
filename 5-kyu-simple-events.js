// Simple events
// 5 kyu https://www.codewars.com/kata/simple-events
// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

function Event() {
  this.handlers = []
  this.subscribe = (f) => this.handlers.push(f)
  this.unsubscribe = (f)=> this.handlers.splice(this.handlers.indexOf(f), 1)
  this.emit = (...args) => {
    for(const f of this.handlers) f(...args)
  }
}