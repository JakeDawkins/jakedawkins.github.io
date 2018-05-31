webpackJsonp([0x81b8806e4260],{518:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"When Front-End Met Back-End: A GraphQL Love Story",description:"Talk given at Asbury Agile - Oct 6, 2017. Introducing GraphQL through a (very fake) love story",link:"https://media.graphcms.com/Cu9lphgKRqikoudV9KY0",linkTitle:"View Slides",date:"2017-10-06",type:"SPEAKING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/asbury-presentation/"}}},{node:{frontmatter:{title:"GraphQL at the Edge",description:"Talk given for GraphQL NYC on May 8, 2018. Discussing the future of Apollo Server and how to push it to the edge.",link:"https://media.graphcms.com/GB9WcN3S5qd2VSrsYMmA",linkTitle:"View Slides",date:"2018-05-08",type:"SPEAKING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/graphql-nyc-april/"}}},{node:{frontmatter:{title:"Authorization in GraphQL",description:"Practical methods for controlling access to the data in your API",link:"https://dev-blog.apollodata.com/authorization-in-graphql-452b1c402a9",linkTitle:"Read on Medium",date:"2018-05-15",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/authorization-in-graphql/"}}},{node:{frontmatter:{title:"Learning Reason by Building in Reason",description:"Anytime I’m exploring a new language, I like to familiarize myself with it by building something familiar. Like Quicksort or a BST",link:"https://medium.com/@JakeDawkins/learning-reason-by-building-in-reason-67e3e42c65b6",linkTitle:"Read on Medium",date:"2018-01-10",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/learning-reason-by-building-in-reason/"}}},{node:{frontmatter:{title:"Intro to Functional Programming Concepts",description:"Some early notes of mine taken while I was learning functional programming",link:null,linkTitle:null,date:"2016-00-00",type:"WRITING",hide:null},timeToRead:5,html:"<h2>What this is</h2>\n<p>This is a 10,000 foot view of functional programming. It is not a hello world walkthrough, but it is also not a programming systems or math class. It is a plain English overview of some of the simplest concepts in functional programming. If that sounds good to you, keep reading. If you're looking for something more complicated, here's a paper on <a href=\"http://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf\">lambda calculus</a>.</p>\n<p>Disclaimer: I'm secretly writing this to make sure I actually know and can explain these concepts. So don't go betting your job or future on anything I say here. Do your homework 😉.</p>\n<h2>Intro</h2>\n<p>The world of imperative and object-oriented programming is bliss. Unless of course you've written more than a \"Hello World\" program. Then you're probably aware of things like side effects, and program state. At least when they go wrong.</p>\n<p>Functional programming aims to take a very mathematical approach to writing programs. It uses many concise, deliberate, and reusable functions to replace larger, more abstract ones.</p>\n<p>This makes code more testable, accurate, and reliable. It's not all fun and games, but I'll withhold the bad news until later as to not scare you off 😎.</p>\n<h2>One sentence definition</h2>\n<blockquote>\n<p>Programming using only pure, deterministic functions.</p>\n</blockquote>\n<p>Summarizing an entire programming paradigm in a single sentence doesn't do it much justice though, so I'll break it down into a few main ideas.</p>\n<h2>Determinism</h2>\n<p>Determinism is fun. And pretty easy to understand (in theory). A few key points here:</p>\n<p><strong>What goes in determines what you get out.</strong></p>\n<p>Meaning if you run a function with the same arguments twice, there's no way you'll get two different results.</p>\n<p>If you like math, this is just like how 5 + 5 returns 10 every time. No surprises 🙌.</p>\n<p>Hint: Functions like these are also called <em>pure</em> functions.</p>\n<p><strong>Functions don't change their input arguments.</strong></p>\n<p>They just give you new things as an output. Functions can do just about anything they want with the arguments. Unless that includes changing them.</p>\n<p>Since you loved my previous math: squaring 5 doesn't change the value of 5, it gives you a <em>new</em> value as an output: 25.</p>\n<p><strong>Function side effects don't exist.</strong></p>\n<p>Functions don't access or change anything outside of their scope. Meaning no access to global variables, and no changing state somewhere else (mostly because state doesn't exist). If you need something in a function, you have to pass it in directly.</p>\n<p>This is good news though! Because side effects are near impossible to test. And testing is your friend.</p>\n<h2>Immutability</h2>\n<p>Once something is set, you can't change it. Just think about using constants all over the place (and not the Javascript constants that you can change). You can use a variable all you want, but changing it is a no-go. You have to create something new.</p>\n<p>The beauty in this is that you can rely on variables. Even if you're writing parallel code that relies on shared memory. No more mutexes or semaphores.</p>\n<p>This idea behind why we use immutability makes more sense when you think about it like it's just mathematical expressions. Let's say we have an expression <code>x = 5</code>. That makes sense. Some variable <code>x</code> has a value of 5. But <code>x = x + 1</code> is invalid. If you're evaluating mathematical expressions and you arrive to a result like this, you've done something wrong. In math, the values are <em>already</em> set from the beginning. You're just trying to solve for them. There is no concept of <em>setting</em> variables. <code>=</code> is more similar to what we see in programming as <code>==</code> or <code>===</code>. If we're making a deterministic system for programming, it makes sense to follow this style.</p>\n<p>Not being able to change variables also has a really interesting side effect (pun intended) on loops which I'll discuss later.</p>\n<h2>Functions as first class citizens</h2>\n<p><em>Javascript developers rejoice</em></p>\n<p>What does this mean? It means that functions can be variables. If you're not familiar with that, it may take some getting used to. Why? Because those variables can be passed to other functions. Leading us swiftly into...</p>\n<h2>Higher-order functions</h2>\n<p>This is a fun one. Essentially, a higher-order function is a function that takes a function as an argument or returns a new function.</p>\n<p><em>Okay. So what does that mean?</em></p>\n<p>Well it's a way of changing a function to be able to do different things. Some common functions that use this idea are map, reduce, and filter.</p>\n<p>For the sake of brevity (and keeping away from code), I won't explain this here. Instead I'll just link to <a href=\"https://www.youtube.com/watch?v=BMUiFMZr7vk\">this video</a> if you want to learn more about this.</p>\n<h2>Some implications of all this</h2>\n<p><strong>No loops</strong></p>\n<p>Loops normally have some variable that you change and check repeatedly to determine when to stop. If you can't change variables, then you can't loop. So what do you do instead?</p>\n<p><strong>You use recursion</strong></p>\n<p>Or functions calling themselves repeatedly until they don't anymore. The good news is that any algorithm that uses iteration can be rewritten to use recursion.</p>\n<h2>Why use it?</h2>\n<p>I'll keep this short, I promise.</p>\n<p><strong>It's safe(r)</strong>: Since there are no side effects or mutability, you never need to worry about these things changing unexpectedly. This also makes debugging a bit easier.</p>\n<p><strong>It's testable</strong>: Since everything is a pure function, you can easily test all normal, incorrect, edge cases.</p>\n<p><strong>It's concise</strong>: There's often less code (2-10x less some say) because of things like reuse, no state checks, and the short nature of recursive algorithms.</p>\n<p><strong>It's strict</strong>: writing functional programs forces you to think about function contracts. Meaning you have to clearly define what a function expects as arguments and what it returns. Functional languages are also <em>really</em> good at enforcing this.</p>\n<h2>Why not use it?</h2>\n<p><strong>It's different</strong>: Unless you love mathematical proofs, thinking about functions without things like loops or mutability may take some getting used to.</p>\n<p><strong>Its efficiency</strong>: Memory efficiency, specifically. Calling recursive functions all over the place can lead to stack overflows. Immutability also causes you to initialize new variables quite often, which could get expensive. Some languages have optimizations (e.g. tail-call optimization) to manage these issues, and can make functional code faster than imperative code in some cases.</p>\n<p><strong>Its speed</strong>: Once again, this is a language specific issue, but generally mutation is faster than duplication. Changing an already existing object or structure is usually quicker than duplicating said object and changing what you need to.</p>\n<h2>Conclusion</h2>\n<p>I'm not going to provide an end-all solution or claim everyone should use one paradigm or another here, because there is no cookie cutter solution to these problems. Most large applications can't be possible without side effects, and refactoring code to match one programming paradigm or another is expensive and can lead to introducing new bugs.</p>\n<p>However, many of the concepts of functional programming (e.g. pure functions) can be used alongside imperative code. Figuring out how to best use some functional concepts in your development can offer many of the benefits, without a major change.</p>",fields:{slug:"/posts/functional-programming-concepts/"}}},{node:{frontmatter:{title:"Default Props in React",description:null,link:null,linkTitle:null,date:"2016-00-00",type:"WRITING",hide:!0},timeToRead:2,html:'<p>If you\'ve been around React for any length of time, you\'re almost certainly aware of proptypes (or the equivalent in whatever type system you\'re using). I\'ve been aware of these since one of my first tutorials.</p>\n<p>I\'m not sure why it took me so long to find defaultProps and realize how useful they are, but I\'m here to make sure nobody else who reads this misses this little gem.</p>\n<p><img src="https://media.giphy.com/media/1NiMpeyTrYA00/giphy.gif" alt="holy weird riddles, batman!"></p>\n<h2>The What</h2>\n<p><strong>defaultProps</strong> is a property on a react class. Just like proptypes. It lets you assign (wait for it...) default values to your components\' props like so:</p>\n<pre><code>class ContactCard extends Component {\n  ...\n  render () { ... }\n}\n\nContactCard.defaultProps = {\n  firstName: "",\n  lastName: "",\n  age: 0,\n};\n</code></pre>\n<p><img src="https://media.giphy.com/media/TlK63EGn8YyRbiI6mBy/giphy.gif" alt="unamused"></p>\n<h2>The Why</h2>\n<p><strong>No more existence checks</strong></p>\n<pre><code>if ( this.props.person\n  &#x26;&#x26; this.props.person.phones\n  &#x26;&#x26; this.props.person.phones.mobile) {\n  this.setState({ phone: this.props.person.phones.mobile });\n}\n</code></pre>\n<p>If you\'ve ever been hurt by code like this or <code>Uncaught ReferenceErrors</code> then fear not! Default props can help.</p>\n<pre><code>ContactCard.defaultProps = {\n    person: {\n        phones: {\n            mobile: "",\n        },\n    },\n};\n</code></pre>\n<p>That may look a little verbose, but it allows your conditional check to look like</p>\n<pre><code>if(this.props.person.phones.mobile !== "") {\n  this.setState({ phone: this.props.person.phones.mobile });\n}\n</code></pre>\n<p>And the best part: if you forget the <code>if</code> check, then your code won\'t fail. It will just set your state to an empty string (which is probably a little better).</p>\n<p><img src="https://media.giphy.com/media/3o6ZtqUX8nlGDD1e9i/giphy.gif" alt="sure"></p>\n<p>There is one benefit to the verbosity of default props though...</p>\n<h4>Documentation 👏👏👏👏</h4>\n<p><img src="https://media.giphy.com/media/l0HlSi3AIOM3fAhX2/giphy.gif" alt="here we go"></p>\n<p>If you\'ve ever tried to figure out what shape of data an undocumented component is looking for, then suffer no longer!</p>\n<p>If you were to look at the source for this ContactCard component, it would be obvious very quickly what the component was looking for: a <code>person</code> object with a <code>phones</code> object with a <code>mobile</code> key that requires a <code>string</code>. Heck, you could even copy and paste the defaultProps to pass into the component.</p>\n<h2>The Ultimatum</h2>\n<p>So what\'s your choice? Will you string together conditionals until the keys on your keyboard no longer show letters? Will you meticulously document props until you have been awarded the <code>czar</code> title?</p>\n<p>Or will you use defaultProps?</p>\n<p><img src="https://media.giphy.com/media/l0Ex2ZerGEPohkIla/source.gif" alt="maybe... okay"></p>',fields:{slug:"/posts/default-props-in-react/"}}},{node:{frontmatter:{title:"Learning Regular Expressions with Colors",description:"Regular expressions are a bit like a scientific calculator’s extra functions.",link:"https://medium.com/@JakeDawkins/learning-regular-expressions-with-colors-39a6eec87f57",linkTitle:"Read on Medium",date:"2018-02-12",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/learning-regular-expressions-with-colors/"}}},{node:{frontmatter:{title:"Make Coding Fun",description:"I love puzzles. I love memes. Stick figures are the peak of my artistic abilities. These are the reasons I love coding.",link:"https://medium.com/@JakeDawkins/make-coding-fun-f2318b1a495d",linkTitle:"Read on Medium",date:"2017-10-05",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/make-coding-fun/"}}},{node:{frontmatter:{title:"More Testable React Components",description:"Some simple lessons I learned while refactoring components for unit testing",link:null,linkTitle:null,date:"2016-00-00",type:"WRITING",hide:null},timeToRead:5,html:'<p>Testing code is not easy. At least not at first. Learning to test logic for any faults can be a painful process. Especially if you weren\'t the one to write it.</p>\n<p>Luckily, I love the challenge. I enjoy trying to break code down into these chunks and, well... trying to break it. Finding a fault in something I wrote is actually pretty enjoyable to me (unless I find it in production).</p>\n<p>Here are some things I\'ve learned in the process that have made my (and hopefully will make your) job a little easier.</p>\n<p><strong>Disclaimer</strong>: Much of what I\'m about to write has come as a result of learning the functional programming paradigm, and will reflect that. If you disagree with anything, that\'s okay too. I\'m just here to learn and share my experiences 😃</p>\n<h2>Move your logic</h2>\n<p>This may be a controversial move, but I\'ve found it quite useful. If you take the functions that you inevitably declare inside of your component class and move them outside you unlock the full magical powers of Javascript exports, namely being able to separately export your helper functions and test them in isolation.</p>\n<p>so...</p>\n<pre><code>class Adder extends Component {\n  printDate() { ... do some stuff here}\n    render(){\n      &#x3C;div>\n        {this.printDate()}\n      &#x3C;/div>\n    }\n}\n</code></pre>\n<p>becomes...</p>\n<pre><code>export const printDate = () => { ... do some stuff here}\n\nclass Adder extends Component {\n  render(){\n    &#x3C;div>\n      {printDate()}\n    &#x3C;/div>\n  }\n}\n</code></pre>\n<h2>Pass in dependencies as arguments</h2>\n<p><strong>Dependency injection is your friend.</strong> <a href="http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript">Here\'s</a> a quick description.</p>\n<p>But seriously, when testing React components, you may find yourself mocking <em>a lot</em> (at least if you\'re anything like me).</p>\n<p>One way to alleviate this pain (and make your code a little more stable at the same time 😉) is a little thing called dependency injection. Instead of importing something at the top of the file and using it haphazardly all around like a global, try passing it as an argument to a function.</p>\n<p>If done right, you can end up with completely deterministic pure functions (which are a dream to test).</p>\n<p>Code that looks like...</p>\n<pre><code>import moment from "moment";\n\nexport const isEvenOrOddTime = () => {\n  const time = Number(moment().format("ss"));\n  if (time % 2 == 0) return "even";\n  return "odd";\n};\n</code></pre>\n<p>suddenly looks like</p>\n<pre><code>import moment from "moment";\n\nexport const isEvenOrOddTime = (dateUtil) => {\n  const time = Number(dateUtil().format("ss"));\n  if (time % 2 == 0) return "even";\n  return "odd";\n};\n</code></pre>\n<p>This will make testing that function a <em>lot</em> easier. Instead of mocking the entire imported library, you only need to mock the functionality that the function relies on.</p>\n<p>It\'s a small change, but it may just have a huge impact later.</p>\n<p>Bonus: it can make swapping out utilities as simple as a one line change later on. 💯💯💯</p>\n<h2>Limit dependency on data shape</h2>\n<p>This one is a bit simpler than the last. In Javascript, you may feel like it\'s just easiest sometimes to pass in a single object to your functions and parse the object to get the information you need.</p>\n<p>Sometimes you need to do that. Others you don\'t. When you don\'t <em>need</em> to do it, I encourage you not to.</p>\n<ol>\n<li>undefined is not a function</li>\n<li>cannot access property x on undefined</li>\n</ol>\n<p>These are two errors I\'m more than familiar with, and both can be a result of relying on data shape in your functions. Instead of trying to parse complicated objects in your functions, move that logic to the caller. It will make testing your functions <em>much</em> easier. And if it doesn\'t seem like that\'s the case now, try coming back to that same code 6 months after you wrote it.</p>\n<p>The same ideas apply for React component props. It may seem easy and beautiful to call a component with a single prop containing all the data, but It also may come back to bite you.</p>\n<p>As an example, something like this (without checking to make sure the values exist)...</p>\n<pre><code>const printAuthor = (content) => {\n  const author = content.author.firstName;\n  const date = content.publishedDate;\n\n  // this would error if no publication 😎\n  const publication = content.publication.name;\n  return publication\n    ? `Written on ${date} by ${author} in ${publication}`\n    : `Written on ${date} by ${author}`\n}\n</code></pre>\n<p>can be as beautiful as</p>\n<pre><code>const printAuthor = (author, date, publication) => (\n  publication\n    ? `Written on ${date} by ${author} in ${publication}`\n    : `Written on ${date} by ${author}`\n)\n</code></pre>\n<p><strong>To be fair</strong>, the logic of parsing these objects must live somewhere, and I\'m not suggesting muddying up your <code>render</code> functions with these checks (ew). I would instead suggest that you move this logic to a helper function outside your components so you can manually and extensively test this process.</p>\n<h2>Break apart logic</h2>\n<p>It probably won\'t come as a surprise but long, complicated functions are hard to test. Much of the benefits of pure functions that don\'t rely on data shape are lost if your function logic is impossible to follow. If you have to write more than a dozen or two tests for a function to test all possible branches of code, it might be wise to split up that function into two (or more).</p>\n<p>Some people make recommendations for the max number of lines a function should have. I\'m not going to do that here, as each person has their own preference and writing style. Just keep this in mind when designing your logic paths.</p>\n<h2>Some caveats...</h2>\n<p>Not everything here is as simple as it sounds. For example, there is lifecycle logic that may be more difficult to split apart, and other functions rely on <code>this</code> being intact that you may have to think twice about.</p>\n<p>Like <code>setState</code>. Upon first glance, I realized that moving setState outside of the React class would cause some problems, as it needs to be in the scope of a react class to work. In other words, I can\'t just do:</p>\n<pre><code>export const doSomeStuff = (setter) => {\n  setter({key: "value"});\n};\n\nclass Adder extends Component {\n  componentWillMount() {\n    setter(this.setState);\n  }\n\n  render(){ ... }\n}\n</code></pre>\n<p>But what I didn\'t think about at first was that setState takes another argument: a reducer function that takes a previous state and props and returns the state to set <a href="https://facebook.github.io/react/docs/react-component.html#setstate">(more here)</a>.</p>\n<p>So instead of moving the <em>call</em> to setState outside of the component, I could just move the <em>logic</em> like so...</p>\n<pre><code>export const determineNextState = (prevState, props) =>\n  ({ key: "value" });\n\nclass Adder extends Component {\n  componentWillMount() {\n    this.setState(determineNextState);\n  }\n\n  render(){ ... }\n}\n</code></pre>\n<p>That way the <em>call</em> to <code>this.setState</code> still has the correct scope, and the logic of the call is testable.</p>\n<h2>Conclusion</h2>\n<p>React is a complicated beast, and testing components is not an exact science. This article leaves out some important notes on testing interaction with components, but I believe applying some of these principles to components could have major impacts on reasonability, stability, and testability of your code. I know it has for mine.</p>',fields:{slug:"/posts/more-testable-react-components/"}}},{node:{frontmatter:{title:"Object Key Validation in JavaScript",description:"Checking if keys exist in objects based on logic rules doesn’t have to be hard.",link:"https://medium.com/p/fd9b576a55e",linkTitle:"Read on Medium",date:"2018-01-05",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/object-key-validation-in-javascript/"}}},{node:{frontmatter:{title:"What is a Binary Search Tree?",description:"A ground-up introduction to one of the most useful data structures.",link:"https://medium.com/@JakeDawkins/what-is-a-binary-search-tree-2bfdc2bcba7b",linkTitle:"Read on Medium",date:"2017-09-12",type:"WRITING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/what-is-a-binary-search-tree/"}}},{node:{frontmatter:{title:"The Importance of Unimportant Hobbies",description:"A lesson that I learned a while back about rest and relaxation",link:null,linkTitle:null,date:"2016-00-00",type:"WRITING",hide:null},timeToRead:2,html:"<p>It sounds counterintuitive, but this bit of advice has impacted me more than most:</p>\n<blockquote>\n<p>Have a hobby that doesn't matter.</p>\n</blockquote>\n<p>That's the simple version, but it may make more sense if I expand on it a bit.</p>\n<blockquote>\n<p>Have a hobby that has no immediate impact on your career or the others around you.</p>\n</blockquote>\n<p>As a developer, this means that I like to have a hobby that has nothing to do with software development (or better yet, technology at all). In the past, this has been hiking, kayaking, photography, and paddle boarding. Recently, I've been trying my hand (or rather my feet) at learning to ride a longboard. And I love it.</p>\n<h2>But Why?</h2>\n<p>It's quite simple, actually. Although it may seem like this is a productivity black hole, the time I spend on these hobbies is some of my favorite. Because there is <em>no</em> stress.</p>\n<p>Nobody is expecting anything from me. Nobody is expecting me to make them money or produce a product for them. Nobody even <em>cares</em> if I'm any good at these hobbies.</p>\n<p>Better yet, theres no internal stress, either. I'm not secretly trying to monetize these hobbies or use them for any kind of personal gain. I set the pace of my learning, and I decide whether or not to participate. I can stop at any time, and I can start at any time.</p>\n<p><em>Carefree</em></p>\n<p>Now, it may seem that these hobbies are a zero-sum game, and that there's no penalty for partaking, but there's also no gain. Because if there was gain, then it wouldn't be an unimportant hobby, right? In a sense, yes.</p>\n<p>The key difference in an important and unimportant hobby is the <em>purpose</em>, not necessarily the outcome. The purpose of an unimportant hobby is pure fun, rather than gain. But along with learning anything, some kind of gain is bound to present itself.</p>\n<p>For me, the gain in practicing these kinds of hobbies is relaxation. It helps me to unwind from the pressures of work and adult life. Rather than spending my evenings working on side projects to sharpen my craft (a pressure), I get to spend time outdoors. Rather than trying to become a better version of who I <em>think</em> I am, I get to spend time exploring who I <em>want</em> to be.</p>\n<p>And if I find something that I love, I can try to become known for it or make money from it. It's wholly up to me what I do with what I learn.</p>\n<h2>Conclusion</h2>\n<p>Finding a hobby that's unimportant to me has been unexpectedly important. It's changed the way I spend my time, and has helped me to be a more relaxed person.</p>\n<p>I'd encourage anyone to explore new hobbies. You never know what you might stumble upon that brings you joy. And if it doesn't, the beauty of it that no one really cares. Drop it and never return.</p>",fields:{slug:"/posts/the-importance-of-unimportant-hobbies/"}}},{node:{frontmatter:{title:"Making it with Apollo",description:"Getting to production with a GraphQL schema (video coming soon)",link:"https://media.graphcms.com/ZlH7BJPSSJmZTbGLT3A6",linkTitle:"View Slides",date:"2018-05-31",type:"SPEAKING",hide:null},timeToRead:1,html:"",fields:{slug:"/posts/apollo-day-may/"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-924a5927c7ed5f348777.js.map