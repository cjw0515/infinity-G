<template>
    <tr>
        <td>{{rowData.menuTitle}}</td>
        <td>{{rowData.menuLink}}</td>
        <td>{{rowData.menuIcon}}</td>
        <td>{{rowData.isCollapseMenu}}</td>
        <td>
        <i class="ti-trash" @click="handleDeleteRowData()"></i>
        <i class="ti-settings" @click="handleModifyRowData()"></i>
        </td>
    </tr>
</template>
<script>
export default {
    props:{
        rowData:{
            type: Object,
            default: ()=>({
                menuTitle: "default",
                menuLink:"default",
                menuIcon:"default",
                isCollapseMenu: true
            })
        }        
    }
}
</script>
