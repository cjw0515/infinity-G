<template>
    <!-- 상세 -->
    <div class="card child text-left">
        <div class="card-header">
            <h4 class="card-title">{{selectedMenu.menu.menuName}}</h4>
        </div>
        <ul class="list-group list-group-flush" v-if="!isEmptyObject(selectedMenu.menu)">
            <li class="list-group-item">
            <div class="float-left">메뉴이름 : {{selectedMenu.menu.menuName}}</div>
            <div class="float-right">
                <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
            </li>
            <li class="list-group-item">
            <div class="float-left">링크 : {{selectedMenu.menu.menuLink}}</div>
            <div class="float-right">
                <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
            </li>
            <li class="list-group-item">
            <div class="float-left">
                아이콘 :
                <i v-bind:class="selectedMenu.menu.menuIcon"/>
            </div>
            <div class="float-right">
                <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
            </li>
            <li class="list-group-item">
            <div class="float-left">depth : {{selectedMenu.menu.menuDepth}}</div>
            <div class="float-right">
                <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
            </li>

            <li class="list-group-item">
            <div class="float-left">사용 : {{selectedMenu.menu.menuIsUsing}}</div>
            <div class="float-right">
                <i class="btn-icon ti-settings" @click="handleModifyRowData()"></i>
            </div>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
     
}
</script>
