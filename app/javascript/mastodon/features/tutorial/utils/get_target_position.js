const getHeaderFromTitle = (title) => {
  return Array.from(document.querySelectorAll('.column-header__title')).find(x => x.innerHTML === title).closest('.column-header');
};

export default function getTargetPosition(target) {
  switch (target) {
  case 'All':
    return document.querySelector('.columns-area').getBoundingClientRect();
  case 'Header:localTimeLine':
    return getHeaderFromTitle('ローカルタイムライン').getBoundingClientRect();
  case 'Header:home':
    return getHeaderFromTitle('ホーム').getBoundingClientRect();
  case 'Header:notification':
    return getHeaderFromTitle('通知').getBoundingClientRect();
  case 'Column:localTimeLine':
    return document.querySelectorAll('.column')[0].getBoundingClientRect();
  case 'Column:home':
    return document.querySelectorAll('.column')[1].getBoundingClientRect();
  case 'Column:notification':
    return document.querySelectorAll('.column')[2].getBoundingClientRect();
  case 'Form:toot':
    return document.querySelector('.compose-form').getBoundingClientRect();
  case 'Link:niconico':
    return document.querySelector('.column-link').getBoundingClientRect();
  case 'Link:movieTimeLine':
    return document.querySelectorAll('.column-link')[1].getBoundingClientRect();
  case 'Link:liveTimeLine':
    return document.querySelectorAll('.column-link')[2].getBoundingClientRect();
  case 'Link:publicTimeLine':
    return document.querySelectorAll('.column-link')[3].getBoundingClientRect();
  case 'SubHeader:setting':
    return document.querySelectorAll('.column-subheading')[1].getBoundingClientRect();
  case 'Button:toot':
    return document.querySelector('.compose-form__publish-button-wrapper').getBoundingClientRect();
  default:
    return document.querySelector('.tutorial').getBoundingClientRect();
  }
};
