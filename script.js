const menuBtn=document.querySelector(".menu-btn"),navLinks=document.querySelector(".nav-links");menuBtn?.addEventListener("click",()=>navLinks.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

async function loadLeetCodeStats(){
  const total=document.getElementById("lc-total"),easy=document.getElementById("lc-easy"),medium=document.getElementById("lc-medium"),hard=document.getElementById("lc-hard"),status=document.getElementById("lc-status");
  if(!total)return;
  try{
    const res=await fetch("/.netlify/functions/leetcode",{headers:{Accept:"application/json"}});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    const data=await res.json();
    if(!data?.success)throw new Error(data?.error||"Stats unavailable");
    total.textContent=data.total; easy.textContent=data.easy; medium.textContent=data.medium; hard.textContent=data.hard;
    status.textContent=`Live from LeetCode · updated ${new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}`;
  }catch(error){
    console.error("LeetCode stats unavailable",error);
    status.textContent="Live stats are available on the Netlify deployment.";
  }
}
loadLeetCodeStats();
