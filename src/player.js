import * as Tone from 'tone';

export default function Player() {
	return (
		<button
			onClick={() => {
				Tone.start();
			}}
		>
			press me
		</button>
	);
}
