<script lang="ts">
  import game, { GameStatus } from '$logic/app/game'
  import Flex from '$components/modular/Flex.svelte'
  import StyledContainer from '$components/modular/StyledContainer.svelte'

  const textMap: Record<GameStatus, string> = {
    'waiting': 'Select the new word',
    'correct-answer': 'Nice!',
    'incorrect-answer': `You've seen that before.`,
    'ended': '(none)',
  }

  $: status = textMap[$game.status]
</script>

<StyledContainer style="width: 15rem;">
  <Flex center>
    <p>{status}</p>
  </Flex>
</StyledContainer>
