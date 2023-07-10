<script lang="ts">
	import { showPopup } from '$lib/stores/popup';
	import Checkbox from "$lib/components/Checkbox.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import type { Slice } from "@prismicio/client";
	import { onMount } from "svelte";
	import Form from "../Form.svelte";
    import { wait } from '$lib/utils';

	export let slice: Slice;
	export let showAfterSeconds: 8000;

	// let text: prismic.RichTextField = slice.primary.text as prismic.RichTextField;
	// let emoji: prismic.KeyTextField = slice.primary.emoji as prismic.KeyTextField;
	let from = slice.items[0].from;
	let to = slice.items[0].to;
	let now = Date.now();
	let _from = from!=null ? Date.parse(from.toString()) : 0;
	let _to =  to!=null ? Date.parse(to.toString()) : 0;

	

	let slices: any | null = slice?.items[0];
	let title: any | null = slices?.popuptitle[0]?.text;
	let popuptext: any | null = slices?.popuptext;
	let dates: any | null = slices?.dates;
	let image: any = slice.items[0]?.image;
	let url: any = image.url;
	let dialog: HTMLDialogElement;
	let action = "close";
	let myForm: HTMLFormElement;
	let validDates = false;

	if (now > _from && now < _to) {
		validDates = true;
	} else{
		validDates = false;
	}

	onMount(async() => {
		if (validDates) {
			let ok = await wait(showAfterSeconds);
            if(ok) dialog.show();
			// dialog.showModal();
		}
	});
	const formActionResult = (event: CustomEvent) => {
		const { result } = event.detail;
		const { success } = result.data;
		if (success) {
			dialog.close();
		}
	};
</script>

<svelte:head />
<Modal bind:dialog>
	<span slot="header" class="header">
		<img src={url} alt="" srcset="" />
		<h2>{title}</h2>
	</span>
	<Form slot="body" bind:myForm on:formaction={formActionResult} {action}>
		<!-- <img src="{url}" alt="" srcset=""> -->
		<div class="block">
			<div class="information">
				{#each popuptext as text}
					<p class="text">{text.text}</p>
				{/each}
			</div>
			<div class="dates">
				<ul>
					{#each dates as date}
						<li class="text">{date.text}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="button-wrapper">
			<button
				aria-label="close-modal"
				tabindex="0"
				aria-live="polite"
				class="cta"
				on:mousedown={(e) => {
					$showPopup = false;
					dialog.close();
				}}
			>
				ausblenden
			</button>
			<button
				aria-label="close-modal"
				type="submit"
				tabindex="0"
				aria-live="polite"
				class="danger"
			>
				nicht mehr anzeigen
			</button>
			<label for="no_notification">
				<Checkbox
					classNames={"notify"}
					id="no_notification"
					labelText="Ich möchte für die nächsten 5 Tage keine Benachrichtigung über Aktionen erhalten."
					required={true}
				/>
			</label>
		</div>
	</Form>
</Modal>


<style lang="scss">
	:global(.notify) {
		font-size: 16px;
		font-weight: 300;
	}
	.header {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		h2 {
			// max-width: 250px;
			font-size: 1.5rem;
			// text-align: center;
			width: 80%;
		}
		img {
			width: 120px;
			height: 120px;
		}
	}
	.block {
		.information {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			p {
				margin: 0.5rem;
				text-align: center;
			}
		}
		.dates {
			margin-top: 1rem;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			ul {
				li {
					text-align: center;
				}
			}
		}
	}
	.button-wrapper {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		width: 100%;
		height: 100%;
		position: relative;
		.cta {
			font-weight: 500;
			background-color: var(--primary);
			color: #fff;
			&:hover {
				background-color: var(--primary-hover);
			}
		}
	}

	@media screen and (max-width: 450px) {
		.header {
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
			h2 {
				// max-width: 250px;
				font-size: 1.1rem;
				text-align: center;
				width: 80%;
			}
			img {
				width: 60px;
				height: 60px;
			}
		}
		.information {
			p {
				font-size: 0.9rem;
			}
		}
		.dates {
			ul {
				li {
					font-size: 0.9rem;
				}
			}
		}
	}
</style>
