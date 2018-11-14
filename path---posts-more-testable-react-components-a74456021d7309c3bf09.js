webpackJsonp([0xcc5b9d4e5a10],{289:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Testing code is not easy. At least not at first. Learning to test logic for any faults can be a painful process. Especially if you weren\'t the one to write it.</p>\n<p>Luckily, I love the challenge. I enjoy trying to break code down into these chunks and, well... trying to break it. Finding a fault in something I wrote is actually pretty enjoyable to me (unless I find it in production).</p>\n<p>Here are some things I\'ve learned in the process that have made my (and hopefully will make your) job a little easier.</p>\n<p><strong>Disclaimer</strong>: Much of what I\'m about to write has come as a result of learning the functional programming paradigm, and will reflect that. If you disagree with anything, that\'s okay too. I\'m just here to learn and share my experiences 😃</p>\n<h2>Move your logic</h2>\n<p>This may be a controversial move, but I\'ve found it quite useful. If you take the functions that you inevitably declare inside of your component class and move them outside you unlock the full magical powers of Javascript exports, namely being able to separately export your helper functions and test them in isolation.</p>\n<p>so...</p>\n<pre><code>class Adder extends Component {\n  printDate() { ... do some stuff here}\n    render(){\n      &#x3C;div>\n        {this.printDate()}\n      &#x3C;/div>\n    }\n}\n</code></pre>\n<p>becomes...</p>\n<pre><code>export const printDate = () => { ... do some stuff here}\n\nclass Adder extends Component {\n  render(){\n    &#x3C;div>\n      {printDate()}\n    &#x3C;/div>\n  }\n}\n</code></pre>\n<h2>Pass in dependencies as arguments</h2>\n<p><strong>Dependency injection is your friend.</strong> <a href="http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript">Here\'s</a> a quick description.</p>\n<p>But seriously, when testing React components, you may find yourself mocking <em>a lot</em> (at least if you\'re anything like me).</p>\n<p>One way to alleviate this pain (and make your code a little more stable at the same time 😉) is a little thing called dependency injection. Instead of importing something at the top of the file and using it haphazardly all around like a global, try passing it as an argument to a function.</p>\n<p>If done right, you can end up with completely deterministic pure functions (which are a dream to test).</p>\n<p>Code that looks like...</p>\n<pre><code>import moment from "moment";\n\nexport const isEvenOrOddTime = () => {\n  const time = Number(moment().format("ss"));\n  if (time % 2 == 0) return "even";\n  return "odd";\n};\n</code></pre>\n<p>suddenly looks like</p>\n<pre><code>import moment from "moment";\n\nexport const isEvenOrOddTime = (dateUtil) => {\n  const time = Number(dateUtil().format("ss"));\n  if (time % 2 == 0) return "even";\n  return "odd";\n};\n</code></pre>\n<p>This will make testing that function a <em>lot</em> easier. Instead of mocking the entire imported library, you only need to mock the functionality that the function relies on.</p>\n<p>It\'s a small change, but it may just have a huge impact later.</p>\n<p>Bonus: it can make swapping out utilities as simple as a one line change later on. 💯💯💯</p>\n<h2>Limit dependency on data shape</h2>\n<p>This one is a bit simpler than the last. In Javascript, you may feel like it\'s just easiest sometimes to pass in a single object to your functions and parse the object to get the information you need.</p>\n<p>Sometimes you need to do that. Others you don\'t. When you don\'t <em>need</em> to do it, I encourage you not to.</p>\n<ol>\n<li>undefined is not a function</li>\n<li>cannot access property x on undefined</li>\n</ol>\n<p>These are two errors I\'m more than familiar with, and both can be a result of relying on data shape in your functions. Instead of trying to parse complicated objects in your functions, move that logic to the caller. It will make testing your functions <em>much</em> easier. And if it doesn\'t seem like that\'s the case now, try coming back to that same code 6 months after you wrote it.</p>\n<p>The same ideas apply for React component props. It may seem easy and beautiful to call a component with a single prop containing all the data, but It also may come back to bite you.</p>\n<p>As an example, something like this (without checking to make sure the values exist)...</p>\n<pre><code>const printAuthor = (content) => {\n  const author = content.author.firstName;\n  const date = content.publishedDate;\n\n  // this would error if no publication 😎\n  const publication = content.publication.name;\n  return publication\n    ? `Written on ${date} by ${author} in ${publication}`\n    : `Written on ${date} by ${author}`\n}\n</code></pre>\n<p>can be as beautiful as</p>\n<pre><code>const printAuthor = (author, date, publication) => (\n  publication\n    ? `Written on ${date} by ${author} in ${publication}`\n    : `Written on ${date} by ${author}`\n)\n</code></pre>\n<p><strong>To be fair</strong>, the logic of parsing these objects must live somewhere, and I\'m not suggesting muddying up your <code>render</code> functions with these checks (ew). I would instead suggest that you move this logic to a helper function outside your components so you can manually and extensively test this process.</p>\n<h2>Break apart logic</h2>\n<p>It probably won\'t come as a surprise but long, complicated functions are hard to test. Much of the benefits of pure functions that don\'t rely on data shape are lost if your function logic is impossible to follow. If you have to write more than a dozen or two tests for a function to test all possible branches of code, it might be wise to split up that function into two (or more).</p>\n<p>Some people make recommendations for the max number of lines a function should have. I\'m not going to do that here, as each person has their own preference and writing style. Just keep this in mind when designing your logic paths.</p>\n<h2>Some caveats...</h2>\n<p>Not everything here is as simple as it sounds. For example, there is lifecycle logic that may be more difficult to split apart, and other functions rely on <code>this</code> being intact that you may have to think twice about.</p>\n<p>Like <code>setState</code>. Upon first glance, I realized that moving setState outside of the React class would cause some problems, as it needs to be in the scope of a react class to work. In other words, I can\'t just do:</p>\n<pre><code>export const doSomeStuff = (setter) => {\n  setter({key: "value"});\n};\n\nclass Adder extends Component {\n  componentWillMount() {\n    setter(this.setState);\n  }\n\n  render(){ ... }\n}\n</code></pre>\n<p>But what I didn\'t think about at first was that setState takes another argument: a reducer function that takes a previous state and props and returns the state to set <a href="https://facebook.github.io/react/docs/react-component.html#setstate">(more here)</a>.</p>\n<p>So instead of moving the <em>call</em> to setState outside of the component, I could just move the <em>logic</em> like so...</p>\n<pre><code>export const determineNextState = (prevState, props) =>\n  ({ key: "value" });\n\nclass Adder extends Component {\n  componentWillMount() {\n    this.setState(determineNextState);\n  }\n\n  render(){ ... }\n}\n</code></pre>\n<p>That way the <em>call</em> to <code>this.setState</code> still has the correct scope, and the logic of the call is testable.</p>\n<h2>Conclusion</h2>\n<p>React is a complicated beast, and testing components is not an exact science. This article leaves out some important notes on testing interaction with components, but I believe applying some of these principles to components could have major impacts on reasonability, stability, and testability of your code. I know it has for mine.</p>',frontmatter:{title:"More Testable React Components"}}},pathContext:{slug:"/posts/more-testable-react-components/"}}}});
//# sourceMappingURL=path---posts-more-testable-react-components-a74456021d7309c3bf09.js.map