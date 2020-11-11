const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '幫忙選個特別的藍紫色'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '破產']
}

const phrase = ['很簡單吧？', '這很容易吧？', '應該很快吧？', '很正常啊！', '人之常情啊！', '也不會嗎？', '應該會吧？']

function rubbishTalkGenerator(target) {
  let rubbishTalk = ''
  // 確認使用者選擇的target
  if (target === 'engineer') {
    // 找到該target的適用幹話
    const randomTask = task.engineer[Math.floor(Math.random() * task.engineer.length)]
    const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)]
    rubbishTalk = randomTask + "，" + randomPhrase
  } else if (target === 'designer') {
    const randomTask = task.designer[Math.floor(Math.random() * task.designer.length)]
    const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)]
    rubbishTalk = randomTask + "，" + randomPhrase
  } else if (target === 'entrepreneur') {
    const randomTask = task.entrepreneur[Math.floor(Math.random() * task.entrepreneur.length)]
    const randomPhrase = phrase[Math.floor(Math.random() * phrase.length)]
    rubbishTalk = randomTask + "，" + randomPhrase
  } else if (!target) { // 如果沒選target
    return (`請選擇一人物`)
  }




  //return
  return rubbishTalk


}
module.exports = rubbishTalkGenerator