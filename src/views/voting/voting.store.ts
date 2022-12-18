
export const useVotingStore = defineStore('votingStore', () => {
  const userLog = ref<ILog[]>([])
  const counter = ref<number>(0)

  function padTo2Digits (num: number) {
    return String(num).padStart(2, '0')
  }

  const localLog = ref<ILog[]>(JSON.parse(localStorage.log))
  localLog.value.forEach(el => userLog.value.push(el))

  return {
    userLog,
    counter,
    padTo2Digits
  }
})
