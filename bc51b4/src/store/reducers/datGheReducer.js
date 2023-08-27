import data from "../../data/danhSachGhe.json";

const DEFAULT_STATE = {
  listChair: data,
  updateList:[],
};

export const datGheReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      const data = [...state.listChair]
      const list = [...state.updateList]
      let chair;
      for(const item of data.slice(1)){
          chair = item.danhSachGhe.find((element)=>element.soGhe===action.payload.soGhe
        );
        console.log(chair);
        if(chair)break;
      }
      const row = data.findIndex((element)=>{
        return element.hang===chair.soGhe.charAt(0);
      })
      const col = data[row].danhSachGhe.findIndex((element)=>{
        return element.soGhe===chair.soGhe;
      });
      data[row].danhSachGhe[col].dangChon = !data[row].danhSachGhe[col].dangChon
      state.listChair=data;
      const index = list.findIndex(element=>{
        return element.soGhe===chair.soGhe;
      })
      if(index===-1){
        list.push(data[row].danhSachGhe[col])
      }
      else {list.splice(index,1);}
      console.log(list);
    state.updateList = list;

    }  
    
    break;
  }
  return { ...state};
};
