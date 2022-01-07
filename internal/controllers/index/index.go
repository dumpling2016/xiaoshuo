/*
 * @Descripttion: 我见青山多妩媚
 * @Date: 2022-01-04 14:32:34
 * @LastEditTime: 2022-01-06 16:04:49
 */
package index

import (
	"net/http"

	"xiaoshuo/internal/services/index"
	"xiaoshuo/internal/services/raw_data"

	"github.com/gin-gonic/gin"
)

var Image = "http://180.76.238.148:8078/image"

func Index(ctx *gin.Context) {

	indexData, hotcontent, _ := index.Index(ctx)

	menu := raw_data.GetMenus()
	// if err != nil {
	// 	ctx.JSON(http.StatusOK, controllers.NewErrResponse(err.Error()))
	// 	return
	// }
	// ctx.JSON(http.StatusOK, controllers.NewSucResponse(data))

	ctx.HTML(http.StatusOK, "index.tmpl", gin.H{
		"menu":       menu,
		"indexData":  indexData,
		"hotcontent": hotcontent,
		"image":      Image,
	})

}
