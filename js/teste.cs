using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace WFTestes
{
    public class Monitor
    {
        public string descricao { get; private set; }

        private double valor;
        private double taxaCrescimento;
        private Timer temporarizador;
        private int qtde;
        private int limite = 119;
        private bool canActivate = true;
        private Action toDo;
        private List<IDisplay> displays;

        public Monitor(string descricao, double taxaCrescimento, int tempo, Action toDo)
        {
            this.descricao = descricao;
            this.taxaCrescimento = taxaCrescimento;
            this.valor = 0;
            this.qtde = 0;
            this.temporarizador = new Timer(tempo);
            this.temporarizador.Enabled = true;
            this.temporarizador.Elapsed += this.incrementar;
            this.displays = new List<IDisplay>();
            this.toDo = toDo;
        }

        public void addAction(Action act)
        {
            this.toDo += act;
        }

        public void ativarContagem()
        {
            if (this.canActivate)
            {
                this.temporarizador.Start();
            }
            else
            {
                throw new Exception("Contador não pode mais ser ativado");
            }
        }

        public void pararContagem()
        {
            this.temporarizador.Stop();
        }


        public void registraDisplay(IDisplay display)
        {
            this.displays.Add(display);
        }

        private void incrementar(Object sender, ElapsedEventArgs e)
        {
            this.valor += taxaCrescimento;
            this.qtde++;
            this.notificaDisplays();
            
            if(this.valor >= this.limite)
            {
                this.canActivate = false;
                this.temporarizador.Stop();
                this.toDo();
            }
        }

        private void notificaDisplays()
        {
            
            if(this.displays.Count > 0)
            {
                
                foreach (IDisplay display in this.displays)
                {
                    display.atualizar(this.valor, this.qtde);
                    
                }
            }
        }
    }
}
