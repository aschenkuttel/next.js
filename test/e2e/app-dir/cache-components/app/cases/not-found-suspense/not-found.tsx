import { getSentinelValue } from '../../getSentinelValue'

export default function NotFound() {
  return (
    <>
      <p id="not-found-message">
        This is the not-found page rendered inside a Suspense boundary.
      </p>
      <div id="not-found-sentinel">{getSentinelValue()}</div>
    </>
  )
}
