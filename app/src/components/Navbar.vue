<template>
  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <router-link class="navbar-brand mt-2 mt-lg-0" to="/">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyB0cmFuc2Zvcm09IiI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMjYuODc1LDMyLjI1djcyLjg5ODQ0bC0xMi4yNjE3MiwxMi40NDAxOGMtMi40MzQ4NywyLjQyOTUgLTMuODYzMjgsNS43ODI0MSAtMy44NjMyOCw5LjIyNzc4YzAsNy4wOTUgNS44Mzg1OSwxMi45MzM1OSAxMi45MzM1OSwxMi45MzM1OWgxMjQuNjMyODFjNy4wOTUsMCAxMi45MzM1OSwtNS44Mzg1OSAxMi45MzM1OSwtMTIuOTMzNTljMCwtMy40NDUzNyAtMS40Mjg0MSwtNi44MDM0MSAtMy44NjMyOCwtOS4yMzgyOGwtMTIuMjYxNzIsLTEyLjQyOTY5di03Mi44OTg0NHpNMzcuNjI1LDQzaDk2Ljc1djU5LjEyNWgtOTYuNzV6TTg2LDQ4LjM3NWwtOC4wNjI1LDQ4LjM3NWg4LjA2MjVsOC4wNjI1LC00OC4zNzV6TTY0Ljk2MTkyLDU5LjEyNWwtOS4yMzgyOCwxMS4xMTc0M2wtMS45NzM2NCwyLjMyMDA3bDEuOTczNjQsMi4zMjAwN2w5LjIzODI4LDExLjExNzQzbDUuODM2OTEsLTQuNjQwMTRsLTcuMzE3MTQsLTguNzk3MzZsNy4zMTcxNCwtOC43OTczNnpNMTA3LjAzODA4LDU5LjEyNWwtNS44MzY5MSw0LjY0MDE0bDcuMzE3MTQsOC43OTczNmwtNy4zMTcxNCw4Ljc5NzM2bDUuODM2OTEsNC42NDAxNGw5LjIzODI4LC0xMS4xMTc0M2wxLjk3MzY0LC0yLjMyMDA3bC0xLjk3MzY0LC0yLjMyMDA3ek0zNC42MDE1NiwxMTIuODc1aDEwMi43OTY4OGwxMi40Mjk2OSwxMi4yNjE3MmMwLjQxOTI1LDAuNDE5MjUgMC42NzE4OCwxLjA4ODQ0IDAuNjcxODgsMS42Nzk2OWMwLDEuMzAwNzUgLTAuODgyODQsMi4xODM1OSAtMi4xODM1OSwyLjE4MzU5aC0xMjQuNjMyODFjLTEuMzAwNzUsMCAtMi4xODM1OSwtMC44ODI4NCAtMi4xODM1OSwtMi4xODM1OWMwLC0wLjU4NTg4IDAuMjUyNjIsLTEuMjU1MDYgMC42NzE4OCwtMS42Nzk2OXoiPjwvcGF0aD48L2c+PHBhdGggZD0iIiBmaWxsPSJub25lIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
          height="35"
          alt="Apeture Logo"
          loading="lazy"
        />
        eStore.se
      </router-link>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">

      <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-shopping-cart"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          Shopping Cart
        </div>
      </div>
      <!-- Avatar -->
      <div class="dropdown">
        <a
          class=" text-reset dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMDQuNzc2NjcsMzUuODMzMzNjLTUuMDE2NjcsLTQuMzcxNjcgLTExLjYxLC03LjE2NjY3IC0xOC43NzY2NywtNy4xNjY2N2MtNy4xNjY2NywwIC0xMy43NiwyLjc5NSAtMTguNzc2NjcsNy4xNjY2N2gtMzguNTU2NjdjLTcuOTE5MTcsMCAtMTQuMzMzMzMsNi40MTQxNyAtMTQuMzMzMzMsMTQuMzMzMzN2MTAuNzVjMCwxNy44MDkxNyAxNC40NDA4MywzMi4yNSAzMi4yNSwzMi4yNXYwYzE3LjgwOTE3LDAgMzIuMjUsLTE0LjQ0MDgzIDMyLjI1LC0zMi4yNXYtMy41ODMzM2MwLC0zLjk0MTY3IDMuMjI1LC03LjE2NjY3IDcuMTY2NjcsLTcuMTY2NjdjMy45NDE2NywwIDcuMTY2NjcsMy4yMjUgNy4xNjY2Nyw3LjE2NjY3djMuNTgzMzNjMCwxNy44MDkxNyAxNC40NDA4MywzMi4yNSAzMi4yNSwzMi4yNXYwYzE3LjgwOTE3LDAgMzIuMjUsLTE0LjQ0MDgzIDMyLjI1LC0zMi4yNXYtMTAuNzVjMCwtNy45MTkxNyAtNi40MTQxNywtMTQuMzMzMzMgLTE0LjMzMzMzLC0xNC4zMzMzM3oiPjwvcGF0aD48cGF0aCBkPSJNMTQzLjMzMzMzLDEyMS44MzMzM2MwLC0zLjk1NiAtMy4yMTA2NywtNy4xNjY2NyAtNy4xNjY2NywtNy4xNjY2N2MtOC42NTAxNywwLjEzNjE3IC0xNi45Mjc2NywtMy4wMjQzMyAtMjQuMTU4ODMsLTcuNjE4MTdjLTYuNTI4ODMsLTQuMTU2NjcgLTE1LjczMDgzLC02LjcxNTE3IC0yNi4wMDc4MywtNi43MTUxN2MtMTAuMjc3LDAgLTE5LjQ3OSwyLjYzMDE3IC0yNi4wMTUsNi43ODY4M2MtNy4yODEzMyw0LjQ3MiAtMTUuNDk0MzMsNy43MDQxNyAtMjQuMTUxNjcsNy41NDY1Yy0zLjk1NiwwIC03LjE2NjY3LDMuMjEwNjcgLTcuMTY2NjcsNy4xNjY2N2MwLDEuMjkgMC40MywyLjQzNjY3IDEuMDMyLDMuNDgzbC0wLjEyOSwtMC4wMDcxN2M3LjM2NzMzLDExLjA2NTMzIDE5LjY3OTY3LDE4LjEwMyAzMy4wNjcsMTguMDI0MTdjOC41MDY4MywwIDE2LjY0MSwtMi44OTUzMyAyMy4zNjMzMywtNy45NDA2N2M2LjcyOTUsNS4wNDUzMyAxNC44NjM2Nyw3Ljk0MDY3IDIzLjM2MzMzLDcuOTQwNjdjMTMuMzgwMTcsMC4wNzg4MyAyNS42OTI1LC02Ljk1ODgzIDMzLjA1OTgzLC0xOC4wMjQxN2wtMC4xMjksMC4wMDcxN2MwLjYwOTE3LC0xLjA0NjMzIDEuMDM5MTcsLTIuMTkzIDEuMDM5MTcsLTMuNDgzeiIgb3BhY2l0eT0iMC4zNSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            class="rounded-circle"
            height="25"
            alt="User Icon, Mysterius Mustache Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
export default {
    name:'PrimaryNavigation'
}
</script>

<style>

</style>