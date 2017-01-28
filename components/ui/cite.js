export default ({ text, author }) => (
  <div>
    <div className="pa4">
      <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--green">
        <p className="f5 f4-m f3-l lh-copy measure mt0">
          { text }
        </p>
        <cite className="f6 ttu tracked fs-normal">
          ― { author }
        </cite>
      </blockquote>
    </div>
  </div>
)
