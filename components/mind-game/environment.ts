export const wordsBase = [
  'Человек',
  'год',
  'время',
  'дело',
  'жизнь',
  'день',
  'рука',
  'раз',
  'работа',
  'слово',
  'место',
  'лицо',
  'друг',
  'глаз',
  'вопрос',
  'дом',
  'сторона',
  'страна',
  'мир',
  'случай',
  'голова',
  'ребенок',
  'сила',
  'конец',
  'вид',
  'система',
  'часть',
  'город',
  'отношение',
  'женщина',
  'деньги',
  'земля',
  'машина',
  'вода',
  'отец',
  'проблема',
  'час',
  'право',
  'нога',
  'решение',
  'дверь',
  'образ',
  'история',
  'власть',
  'закон',
  'война',
  'бог',
  'голос',
  'тысяча',
  'книга',
  'возможность',
  'результат',
  'ночь',
  'стол',
  'имя',
  'область',
  'статья',
  'число',
  'компания',
  'народ',
  'жена',
  'группа',
  'развитие',
  'процесс',
  'суд',
  'условие',
  'средство',
  'начало',
  'свет',
  'пора',
  'путь',
  'душа',
  'уровень',
  'форма',
  'связь',
  'минута',
  'улица',
  'вечер',
  'качество',
  'мысль',
  'дорога',
  'мать',
  'действие',
  'месяц',
  'государство',
  'язык',
  'любовь',
  'взгляд',
  'мама',
  'век',
  'школа',
  'цель',
  'общество',
  'деятельнось',
  'организация',
  'президент',
  'комната',
];

export const getElectedWords = (len:number) => wordsBase.filter(el => el.length <= len);
export const getWords = (arr:any[], wordCount:number) => {
  return arr.slice(0, wordCount+1).map((word)=>{
    word = word.split('');
    let divine = Math.ceil(1 - 0.5 + Math.random() * (word.length-2));
    let firstPart = word.splice(0, divine).join('');
    let secondPart = [...word].join(''); 
    return [firstPart, secondPart];
  })
}
export const getRandomWords = (arr:any[]) => {
  const result = [];
  while(arr.length > 0) {
    result.push(arr.splice(Math.round(0 - 0.5 + Math.random() * (arr.length)),1)[0]);
  }
  return result;
}