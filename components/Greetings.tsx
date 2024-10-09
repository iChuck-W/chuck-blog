import React from 'react'
import Typed from 'typed.js'

const Greetings = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null)
  // Create reference to store the Typed instance itself
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    const options = {
      strings: [
        '在这个瞬息万变的时代 In these rapidly changing times ',
        '拥抱变化 Embrace change',
        '拥抱不确定性 Embrace uncertainty',
        '......',
      ],
      typeSpeed: 5,
      backSpeed: 5,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <div className="lg:mb-10 lg:mt-10">
      <h1 className="clip  text-7xl font-extrabold text-transparent dark:to-blue-500">
        Hello Everyone,
        <br />
      </h1>
      <div className="prose dark:prose-dark lg:prose-lg">
        <br />
        <p>
          I'm <b>Chuck</b>. 🧑‍💻
        </p>

        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
      </div>
    </div>
  )
}

export default Greetings
