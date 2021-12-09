<script lang="ts">
  import game from '$logic/app/game'

  export let animation: 'enter' | 'exit'
  export let variant: 'correct' | 'incorrect' | 'missed' | 'empty' | null = null

  $: className = generateClass(animation, variant)
  $: disabled = $game.status !== 'waiting'

  function generateClass(animation: string, variant: string) {
    let className = `word-button animation-${animation}`
    if (variant) className += ` variant-${variant}`
    return className
  }
</script>

<button on:click class={className} {disabled}>
  <span class="front">
    <slot />
  </span>
</button>

<style lang="scss" global>
  @use 'src/styles/util';

  .word-button {
    min-width: 5rem;

    &.animation-enter {
      animation: enter forwards 400ms;
    }

    &.animation-exit {
      animation: exit forwards 400ms;
    }

    &.variant-correct {
      pointer-events: none;
      --color-button-border: var(--color-word-correct-border);
      --color-button-bg: var(--color-word-correct-bg);

      .front {
        position: relative;
        animation: turn-green forwards 450ms ease-in;
        &::after {
          @include util.default-pseudo;
          inset: 2px;
          border-radius: calc(var(--radius-default) - 3px);
          animation: correct-wipe forwards 450ms;
        }
      }
    }

    &.variant-incorrect {
      --color-button-border: var(--color-word-incorrect-border);
      --color-button-bg: var(--color-word-incorrect-bg);
      &:not(.animation-exit) {
        animation: shakeX forwards 500ms;
      }
    }

    &.variant-missed {
      --color-button-border: var(--color-word-missed-border);
      --color-button-bg: var(--color-word-missed-bg);
    }

    &.variant-empty {
      --color-button-border: var(--color-button-border-empty);
    }
  }

  @keyframes shakeX {
    from,
    to {
      transform: translate3d(0, 0, 0);
    }

    20%,
    60% {
      transform: translate3d(-5px, 0, 0);
    }

    40%,
    80% {
      transform: translate3d(5px, 0, 0);
    }
  }

  @keyframes correct-wipe {
    0% {
      right: 100%;
      opacity: 0;
      background-color: white;
    }
    10% {
      opacity: 0;
    }
    20% {
      opacity: 0.75;
    }
    100% {
      right: 2px;
      opacity: 1;
      background-color: var(--color-word-correct-bg);
    }
  }

  @keyframes turn-green {
    from {
      background-color: var(--color-button-bg);
    }
    to {
      background-color: var(--color-word-correct-bg);
    }
  }
</style>
