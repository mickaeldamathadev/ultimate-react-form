export default function SubmitInput(props: {
  title: string
  className?: string
}) {
  return <input className={props.className} type="submit" value={props.title} />
}
