/**
 * Public Method: _initTool exported as init
 */

// Add button to toolstoolbar
const template = `
<div class="sidebar-lists">
  <ul class="lists">
    <li class="sidebar-items"><span id="takeIn">Close</span>
    </li>
    <li class="sidebar-items items">
      <a href="#">Dashboard</a>
    </li>
    <li class="sidebar-items items">
      <a href="#">Trending</a>
    </li>
  </ul>
</div>
`;

export default () => {
  $("#sidebarBody").append(template);
  const mvNavBarTop = `${ document.querySelectorAll(".navbar.navbar-default")[0].clientHeight }px`;
  document.querySelector("#sidebar").style.top = mvNavBarTop;
};