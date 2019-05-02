<template>
    <!-- 상단메뉴 -->
    <div class="card child text-left">
    <div class="card-header">
        <h4 class="card-title">메뉴</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item" @click="popupModal(`menuInsertModal`, `메뉴 삽입`)">
        <i class="btn-icon ti-plus"></i>
        <span style="color:#248afd">메뉴추가</span>
        </li>
        <li
        class="list-group-item"
        v-for="(menu, idx) in menus"
        :key="idx"
        @click="handleMenuClick(idx, 1)"
        >
        <div class="float-left">{{menu.menuName}}</div>
        <div class="float-right">
            <i class="btn-icon ti-trash" @click="handleDeleteRowData()"></i>              
        </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default {
     
}
</script>
