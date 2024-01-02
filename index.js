// Correct usage of async function
 
    async function moveNPC(){
        await npc.walkNorth(1400)
        await npc.walkEast(1200)
        await npc.walkSouth(300)
        await npc.walkEast(1500)
        await npc.walkSouth(1500)
        await npc.walkWest(2700)
        await npc.walkNorth(400)
    }
    
    
    // Create the inventory
    const inventory = newInventory();
    
    async function main() {
        // ... previous code
      
        // Create everything else
        await move(newImage('assets/tree.png')).to(200, 450);
        await move(newImage('assets/pillar.png')).to(350, 250);
        await move(newImage('assets/pine-tree.png')).to(450, 350);
        await move(newImage('assets/crate.png')).to(150, 350);
        await move(newImage('assets/well.png')).to(500, 575);
        await move(newItem('assets/sword.png')).to(500, 555);
        await move(newItem('assets/shield.png')).to(165, 335);
        await move(newItem('assets/staff.png')).to(600, 250);
      }
      
      // Call the main function
      main();
      
