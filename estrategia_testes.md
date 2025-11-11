# Estratégia de Testes

## 1. Introdução
Este documento descreve a estratégia de testes a ser aplicada no projeto, incluindo tipos de testes, ferramentas, critérios de aceitação e responsabilidades da equipe.  
O objetivo é garantir qualidade, reduzir riscos e padronizar o processo de validação.

---

## 2. Objetivos da Estratégia
- Garantir que todas as funcionalidades críticas sejam validadas.
- Prevenir defeitos através de testes contínuos.
- Garantir estabilidade no Frontend e Backend.
- Aumentar a cobertura de testes automatizados.
- Alinhar expectativas entre produto, QA e desenvolvimento.

---

## 3. Escopo
### **Incluído**
- Testes funcionais de frontend Web
- Testes de API (Backend)
- Testes de integração
- Testes automatizados (UI e API)
- Testes exploratórios
- Testes de regressão

### **Excluído**
- Testes de performance (podem ser planejados futuramente)
- Testes de segurança avançados
- Testes mobile (fora do escopo da fase atual)

---

## 4. Tipos de Teste Aplicados
### **4.1 Testes Funcionais**
- Validação de regras de negócio
- Fluxos principais (happy path)
- Validações de erro

### **4.2 Testes de API**
- Testes de contrato
- Testes de status code
- Testes de payload (body)
- Testes de autenticação

### **4.3 Testes de Integração**
- Comunicação entre serviços
- Banco de dados
- Gateways externos

### **4.4 Testes Automatizados**
- Automatização das APIs (Postman/Newman ou Cypress API)
- Automatização de UI (Cypress, Playwright ou Selenium)
- Execução contínua via CI/CD

### **4.5 Testes de Regressão**
- Execução periódica após mudanças
- Suite regressiva automatizada

---

## 5. Ferramentas
| Categoria | Ferramentas |
|----------|-------------|
| Automação Frontend | Cypress, Playwright |
| Automação API | Postman, Newman, RestAssured |
| CI/CD | GitHub Actions, GitLab CI |
| Versionamento | Git + GitHub |
| Documentação | Markdown, Notion, Jira |

---

## 6. Abordagem de Testes (Como vamos testar)
1. **Análise dos requisitos**  
   - Entendimento das regras e critérios de aceitação
   - Avaliação de cenários críticos

2. **Criação de casos de teste (BDD/Gherkin)**  
   - Given / When / Then  
   - Escrita clara e focada no comportamento

3. **Execução manual inicial**  
   - Identificação de gaps e melhorias

4. **Automação dos cenários estáveis**  
   - Prioridade para:
     - login  
     - fluxos críticos  
     - APIs essenciais  

5. **Integração no pipeline CI/CD**  
   - Execução automática a cada PR
   - Report automático de falhas

6. **Regressão contínua**  
   - Automatizada sempre que possível  
   - Manual para pontos sensíveis

---

## 7. Critérios de Aceitação da Entrega
Para considerar uma entrega pronta:

- Todos os critérios de aceitação devem estar cobertos
- Todos os cenários de teste aprovados
- Automação dos cenários críticos implementada
- Ausência de bugs bloqueadores e críticos
- Registros atualizados no Jira

---

## 8. Riscos e Mitigações
| Risco | Impacto | Mitigação |
|------|---------|-----------|
| Falta de requisitos claros | Alto | Refinamentos semanais |
| Mudanças inesperadas | Médio | Feedback contínuo com devs |
| Baixa cobertura automatizada | Alto | Priorizar automação regressiva |
| Dependência de terceiros | Médio | Mockar serviços quando possível |

---

## 9. Métricas de Qualidade
- % de casos de teste executados
- % de automação coberta
- Número de bugs por release
- Tempo médio para correção
- Falhas no pipeline CI/CD

---

## 10. Ambiente de Testes
- Ambiente separado do ambiente de produção
- Dados controlados e resetáveis
- Disponibilidade monitorada

---

## 11. Responsabilidades
| Papel | Responsabilidade |
|-------|------------------|
| QA | Planejar, executar e automatizar os testes |
| Dev | Implementar código testável, corrigir defeitos |
| PO | Fornecer requisitos e validar entregas |
| DevOps | Manter pipeline CI/CD e ambientes |

---

## 12. Conclusão
Esta estratégia estabelece as diretrizes para garantir a qualidade contínua do produto.  
O documento deve ser revisado periodicamente conforme evolução do projeto.
