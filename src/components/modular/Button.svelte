<button on:click>
  <span class="front">
    <slot />
  </span>
</button>

<style lang="scss">
  button {
    cursor: pointer;
    user-select: none;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: var(--radius-default);
    background-color: var(--color-button-border);
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: 450;
    line-height: 1rem;
    transition: all 70ms;

    .front {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      height: 2.5rem;
      padding: 0 1em;
      margin-top: -2px;
      border-radius: var(--radius-default);
      border: solid 2px var(--color-button-border);
      background-color: var(--color-button-bg);
      transform: translateY(-3px);
      transition: all 70ms;
    }

    &:hover,
    &:active {
      border-color: var(--color-button-border-highlight);
    }

    &:active {
      top: 3px;
      .front {
        transform: translateY(0);
      }
    }

    &:disabled {
      pointer-events: none;
    }
  }
</style>
