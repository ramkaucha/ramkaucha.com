export default function About() {
  return (
    <div>
      <h1 className="text-[2em] px-6 font-semibold py-2 tracking-tight">
        About Me
      </h1>
      <div className="space-y-6 text-base leading-relaxed">
        <div className="rounded-2xl p-6 backdrop-blur-xl">
          <p>
          Hey there! I'm Ram, a second-year Computer Science student at the 
          University of New South Wales, based in Sydney. My fascination with 
          technology spans across software development, machine learning, and 
          cybersecurity - I love exploring how these fields intersect and shape 
          our digital world.
          </p>
        </div>
        <div className="rounded-2xl px-6 background-blur-xl">
          <p>
          When I'm not buried in coursework, you'll find me working on random tech
          projects, currently tinkering with arduino to make my own self flying
          drone.
          </p>
          <p className="mt-4">
            <span>You can find more information on what I'm working on </span>
            <a
              href="https://note.ramkaucha.com"
              target="_blank"
              rel="noopener"
              className="underline text-blue hover:opacity-80"
              >
              here
            </a>
            .
          </p>
        </div>
        <div className="rounded-2xl px-6 backdrop-blur-xl">
          <p>
            Outside of tech, I enjoy participating in basketball, travelling, and
            trying out new dishes!!
          </p>
        </div>
      </div>
    </div>
  )
}
