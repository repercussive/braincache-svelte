<script>
  import Flex from '$components/modular/Flex.svelte'
  import Spacer from '$components/modular/Spacer.svelte'
  import game from '$logic/app/game'
  import sleep from '$logic/util/sleep'

  const enterAnimation = 'enter forwards 400ms'
  const exitAnimation = 'exit forwards 400ms'

  let displayedScore = 0
  let animation = enterAnimation
  let isAnimating = false

  $: if ($game.status === 'correct-answer' && !isAnimating) {
    isAnimating = true
    sleep(750)
      .then(() => (animation = exitAnimation))
      .then(() => sleep(400))
      .then(() => {
        displayedScore = $game.score
        animation = enterAnimation
      })
  } else if ($game.status !== 'correct-answer' && isAnimating) {
    isAnimating = false
  }
</script>

<Flex center column>
  <span>Score</span>
  <Spacer mb={4} />
  <div class="container">
    <Flex center asSpan style={`min-width: 3.1ch; animation:${animation};`}>
      {displayedScore}
    </Flex>
  </div>
</Flex>

<style lang="scss">
  @use 'src/styles/util';

  .container {
    padding: util.space(4) util.space(8);
    background-color: var(--color-accent);
    border-radius: var(--radius-default);
    overflow-x: hidden;
  }
</style>
